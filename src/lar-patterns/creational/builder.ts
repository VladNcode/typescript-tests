enum ImageFormat {
	PNG = 'png',
	JPEG = 'jpeg',
}

interface IResolution {
	width: number;
	height: number;
}

interface IImageConversion extends IResolution {
	format: ImageFormat;
}

class ImageBuilder {
	private formats: ImageFormat[] = [];
	private resolutions: IResolution[] = [];

	addPng() {
		if (!this.formats.includes(ImageFormat.PNG)) this.formats.push(ImageFormat.PNG);
		return this;
	}

	addJpeg() {
		if (!this.formats.includes(ImageFormat.JPEG)) this.formats.push(ImageFormat.JPEG);
		return this;
	}

	addResolution(width: number, height: number) {
		this.resolutions.push({ width, height });
		return this;
	}

	build(): IImageConversion[] {
		const res: IImageConversion[] = [];

		for (const { height, width } of this.resolutions) {
			for (const f of this.formats) {
				res.push({ format: f, height, width });
			}
		}

		return res;
	}
}

console.log(
	new ImageBuilder().addJpeg().addPng().addResolution(100, 200).addResolution(400, 500).build(),
);
