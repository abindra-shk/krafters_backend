import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, ParseFilePipeBuilder, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/images.utils';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @Post()
  // create(@Body() createCategoryDto: CreateCategoryDto) {
  //   return this.categoryService.create(createCategoryDto);
  // }

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './upload/images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  createWithImages(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({ maxSize: 1000000 })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body() createCategoryDto: any,
  ) {
    console.log('here');
    console.log(file);
    return this.categoryService.create({
      categoryName: createCategoryDto.categoryName,
      image: file.filename, // Save the filename or path in the database
    });
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
