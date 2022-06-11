interface IInsurance {
	id: number;
	status: string;
	setVehicle(vehicle: any): void;
	submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
	id: number;
	status: string;
	private vehicle: any;

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async submit(): Promise<boolean> {
		const res = await fetch('', {
			method: 'POST',
			body: JSON.stringify({ vehicle: this.vehicle }),
		});

		const data = await res.json();

		return data.isSuccess;
	}
}

class ABInsurance implements IInsurance {
	id: number;
	status: string;
	private vehicle: any;

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async submit(): Promise<boolean> {
		const res = await fetch('ab', {
			method: 'POST',
			body: JSON.stringify({ vehicle: this.vehicle }),
		});

		const data = await res.json();

		return data.isSuccess;
	}
}

abstract class InsuranceFactory {
	db: any;
	abstract createInsurance(): IInsurance;

	saveHistory(ins: IInsurance) {
		this.db.save(ins.id, ins.status);
	}
}

class TFInsuranceFactory extends InsuranceFactory {
	createInsurance(): TFInsurance {
		return new TFInsurance();
	}
}

class ABInsuranceFactory extends InsuranceFactory {
	createInsurance(): ABInsurance {
		return new ABInsurance();
	}
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);

const INSURANCE_TYPE = {
	tf: TFInsurance,
	ab: ABInsurance,
};

type InsType = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
	db: any;

	check(ins: TFInsurance | ABInsurance): ins is TFInsurance {
		return ins instanceof TFInsurance;
	}

	createInsurance<T extends keyof InsType>(type: T): InsType[T] {
		// if (type === 'ab') {
		// 	return new INSURANCE_TYPE[type]() as TFInsurance;
		// } else {
		// 	return new INSURANCE_TYPE[type]() as ABInsurance;
		// }

		return INSURANCE_TYPE[type];
	}

	saveHistory(ins: IInsurance) {
		this.db.save(ins.id, ins.status);
	}
}

const tfInsuranceFactoryAlt = new InsuranceFactoryAlt();
// const insAlt = tfInsuranceFactoryAlt.createInsurance('tf') as TFInsurance;
const insAlt = tfInsuranceFactoryAlt.createInsurance('tf');

const tf2 = new insAlt();

// tfInsuranceFactoryAlt.saveHistory(insAlt);
