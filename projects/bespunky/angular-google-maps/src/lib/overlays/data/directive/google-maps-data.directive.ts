import { Observable } from 'rxjs';
import { Directive, Input, Output } from '@angular/core';

import { GoogleMapsOverlayLifecycleBase } from '../../../core/abstraction/base/google-maps-overlay-lifecycle-base';
import { IGoogleMapsData } from '../i-google-maps-data';
import { GoogleMapsDataFactoryProvider } from '../google-maps-data-factory.provider';
import { Wrapper } from '../../../core/decorators/wrapper.decorator';
import { GoogleMapsEventData } from '../../../core/abstraction/events/google-maps-event-data';
import { Hook } from '../../../core/decorators/hook.decorator';

@Directive({
    selector: 'bs-google-maps-data, [bsGoogleMapsData]',
    exportAs: 'dataLayer',
    providers: [ GoogleMapsDataFactoryProvider ]
})
export class GoogleMapsDataDirective extends GoogleMapsOverlayLifecycleBase
{
    @Wrapper @Input() public dataLayer?: IGoogleMapsData;
    
    @Input() public options?: google.maps.Data.DataOptions;

    /** Fired when a feature is added to the collection. */
    @Hook('addfeature')     @Output() public addFeature          : Observable<GoogleMapsEventData>;
    /** Fired for a click on the geometry. */
    @Hook('click')          @Output() public click               : Observable<GoogleMapsEventData>;
    /** Fired for a double click on the geometry. */
    @Hook('dblclick')       @Output() public doubleClick         : Observable<GoogleMapsEventData>;
    /** Fired for a mousedown on the geometry. */
    @Hook('mousedown')      @Output() public mouseDown           : Observable<GoogleMapsEventData>;
    /** Fired when the mouse leaves the area of the geometry. */
    @Hook('mouseout')       @Output() public mouseOut            : Observable<GoogleMapsEventData>;
    /** Fired when the mouse enters the area of the geometry. */
    @Hook('mouseover')      @Output() public mouseOver           : Observable<GoogleMapsEventData>;
    /** Fired for a mouseup on the geometry. */
    @Hook('mouseup')        @Output() public mouseUp             : Observable<GoogleMapsEventData>;
    /** Fired when a feature is removed from the collection. */
    @Hook('removefeature')  @Output() public removeFeature       : Observable<GoogleMapsEventData>;
    /** Fired when a feature's property is removed. */
    @Hook('removeproperty') @Output() public removeProperty      : Observable<GoogleMapsEventData>;
    /** Fired for a rightclick on the geometry. */
    @Hook('rightclick')     @Output() public rightClick          : Observable<GoogleMapsEventData>;
    /** Fired when a feature's geometry is set. */
    @Hook('setgeometry')    @Output() public setGeometry         : Observable<GoogleMapsEventData>;
    /** Fired when a feature's property is set. */
    @Hook('setproperty')    @Output() public setProperty         : Observable<GoogleMapsEventData>;
}