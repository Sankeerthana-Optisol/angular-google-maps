import * as _ from 'lodash';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ZoomLevel } from '../types/zoom-level.enum';
import { MapEventsMapProvider } from './map-event.enum';
import { GoogleMapsLifecycleBase } from '../../core/abstraction/base/google-maps-lifecycle-base';
import { GoogleMapFactoryProvider } from '../google-map-factory.provider';
import { GoogleMap } from '../google-map';
import { CurrentMapProvider } from './current-map.provider';
import { WrapperInput } from '../../core/decorators/wrapper-input.decorator';

@Component({
    selector: 'bs-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css'],
    providers: [
        GoogleMapFactoryProvider,
        MapEventsMapProvider,
        CurrentMapProvider
    ]
})
export class GoogleMapComponent extends GoogleMapsLifecycleBase
{
    // Bound properties
    @WrapperInput() public map     : GoogleMap;
    @Input() public options?: google.maps.MapOptions;
    @Input() public center? : google.maps.LatLng;
    @Input() public zoom?   : ZoomLevel;

    // Events
    @Output() public boundsChanged      = new EventEmitter();
    @Output() public centerChanged      = new EventEmitter();
    @Output() public zoomChanged        = new EventEmitter();
    @Output() public click              = new EventEmitter();
    @Output() public rightClick         = new EventEmitter();
    @Output() public doubleClick        = new EventEmitter();
    @Output() public mouseMove          = new EventEmitter();
    @Output() public mouseOver          = new EventEmitter();
    @Output() public mouseOut           = new EventEmitter();
    @Output() public drag               = new EventEmitter();
    @Output() public dragStart          = new EventEmitter();
    @Output() public dragEnd            = new EventEmitter();
    @Output() public headingChanged     = new EventEmitter();
    @Output() public maptTypeChanged    = new EventEmitter();
    @Output() public projectionChanged  = new EventEmitter();
    @Output() public resize             = new EventEmitter();
    @Output() public tilesLoaded        = new EventEmitter();
    @Output() public tiltChanged        = new EventEmitter();
    @Output() public idle               = new EventEmitter();
}
