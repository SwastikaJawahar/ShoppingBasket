//
//  RCTCalendarModule.m
//  ShoppingBasket
//
//  Created by Swastika Jawahar on 28/11/2023.
//
// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>
@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
RCT_EXPORT_METHOD(createCalendarEventCallBack:(NSString *)title
                  location:(NSString *)location
                  errorCallback: (RCTResponseSenderBlock)errorCallback
                  successCallback: (RCTResponseSenderBlock)successCallback)
{
  @try {
      NSNumber *eventId = [NSNumber numberWithInt:123];
      successCallback(@[eventId]);
    }

    @catch ( NSException *e ) {
      errorCallback(@[e]);
    }
}

@end
