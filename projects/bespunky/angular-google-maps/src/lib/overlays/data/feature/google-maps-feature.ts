import { IGoogleMapsFeature } from './i-google-maps-feature';
import { IGoogleMapsData } from '../i-google-maps-data';
import { GoogleMapsApiService } from '../../../core/api/google-maps-api.service';
import { NativeObjectWrapper } from '../../../core/decorators/native-object-wrapper.decorator';
import { Wrap } from '../../../core/decorators/wrap.decorator';
import { OutsideAngular } from '../../../core/decorators/outside-angular.decorator';
import { GoogleMapsNativeObjectEmittingWrapper } from '../../../core/abstraction/base/google-maps-native-object-emitting-wrapper';

@NativeObjectWrapper
export class GoogleMapsFeature extends GoogleMapsNativeObjectEmittingWrapper<google.maps.Data.Feature> implements IGoogleMapsFeature
{
    constructor(protected api: GoogleMapsApiService, public readonly data: IGoogleMapsData, private options?: google.maps.Data.FeatureOptions)
    {
        super(api);

        this.data.addFeature(this);
    }

    protected createNativeObject(): google.maps.Data.Feature
    {
        return new google.maps.Data.Feature(this.options);
    }

    public toGeoJson(): Promise<any>
    {
        return new Promise(resolve => this.native.toGeoJson(resolve));
    }

    @Wrap()
    getId(): number | string { return null; }

    @Wrap()
    getGeometry(): google.maps.Data.Geometry { return null; }

    @Wrap() @OutsideAngular
    setGeometry(geometry: google.maps.Data.Geometry | google.maps.LatLng | google.maps.LatLngLiteral): void { return null; }

    @Wrap()
    getProperty(name: string): any { return null; }

    @Wrap() @OutsideAngular
    setProperty(name: string, value: any): any { return null; }
}
