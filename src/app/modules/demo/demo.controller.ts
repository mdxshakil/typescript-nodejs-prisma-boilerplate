import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { demoService } from './demo.service';

const demo = catchAsync(async (req: Request, res: Response) => {
  const result = await demoService.demo();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Demo success',
    data: result,
  });
});

export const demoController = {
  demo,
};
