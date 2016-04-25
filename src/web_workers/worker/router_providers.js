'use strict';"use strict";
var core_1 = require('angular2/core');
var common_1 = require('angular2/platform/common');
var platform_location_1 = require('./platform_location');
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.WORKER_APP_ROUTER = [
    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
    new core_1.Provider(common_1.PlatformLocation, { useClass: platform_location_1.WebWorkerPlatformLocation }),
    new core_1.Provider(core_1.APP_INITIALIZER, {
        useFactory: function (platformLocation, zone) { return function () {
            return initRouter(platformLocation, zone);
        }; },
        multi: true,
        deps: [common_1.PlatformLocation, core_1.NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.runGuarded(function () { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUlJsZXFsdngudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLHVCQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlELHdDQUFzQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRXpFLHlCQUFpQixHQUFHO0lBQzdCLGlEQUF1QjtJQUN2QixJQUFJLGVBQVEsQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2Q0FBeUIsRUFBQyxDQUFDO0lBQ3JFLElBQUksZUFBUSxDQUFDLHNCQUFlLEVBQ2Y7UUFDRSxVQUFVLEVBQUUsVUFBQyxnQkFBMkMsRUFBRSxJQUFZLElBQUssT0FBQTtZQUMzRCxPQUFBLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7UUFBbEMsQ0FBa0MsRUFEeUIsQ0FDekI7UUFDbEQsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxhQUFNLENBQUM7S0FDakMsQ0FBQztDQUNoQixDQUFDO0FBRUYsb0JBQW9CLGdCQUEyQyxFQUFFLElBQVk7SUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgUHJvdmlkZXIsIE5nWm9uZSwgQVBQX0lOSVRJQUxJWkVSfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uJztcbmltcG9ydCB7V2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlNfQ09NTU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uJztcblxuZXhwb3J0IHZhciBXT1JLRVJfQVBQX1JPVVRFUiA9IFtcbiAgUk9VVEVSX1BST1ZJREVSU19DT01NT04sXG4gIG5ldyBQcm92aWRlcihQbGF0Zm9ybUxvY2F0aW9uLCB7dXNlQ2xhc3M6IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb259KSxcbiAgbmV3IFByb3ZpZGVyKEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKHBsYXRmb3JtTG9jYXRpb246IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb24sIHpvbmU6IE5nWm9uZSkgPT4gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSb3V0ZXIocGxhdGZvcm1Mb2NhdGlvbiwgem9uZSksXG4gICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgICAgICBkZXBzOiBbUGxhdGZvcm1Mb2NhdGlvbiwgTmdab25lXVxuICAgICAgICAgICAgICAgfSlcbl07XG5cbmZ1bmN0aW9uIGluaXRSb3V0ZXIocGxhdGZvcm1Mb2NhdGlvbjogV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbiwgem9uZTogTmdab25lKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiB6b25lLnJ1bkd1YXJkZWQoKCkgPT4geyByZXR1cm4gcGxhdGZvcm1Mb2NhdGlvbi5pbml0KCk7IH0pO1xufVxuIl19