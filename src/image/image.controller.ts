import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('image')
export class ImageController {
  @Get('get-image/:imgpath')
  seeUploadedImage(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './upload/images/category' });
  }
}
  