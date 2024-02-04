import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/images.utils';

@Controller('image')
export class ImageController {
  @Get('get-image/:imgpath')
  seeUploadedImage(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './upload/images/category' });
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './upload/images/category',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
  