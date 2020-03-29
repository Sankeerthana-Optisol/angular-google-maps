import { OverlayType } from '../core/abstraction/base/overlay-type.enum';
import { IGoogleMapsDrawableOverlay } from '../core/abstraction/base/i-google-maps-drawable-overlay';
import { IGoogleMapsMarker } from './marker/i-google-maps-marker';
import { IGoogleMapsData } from './data/i-google-maps-data';

export class OverlaysTracker
{
    public markers: IGoogleMapsMarker[] = [];
    public dataLayers: IGoogleMapsData[] = [];

    private map = {
        [OverlayType.Marker]: this.markers,
        [OverlayType.Data]: this.dataLayers
        // TODO: Add here any new supported overlay type collection
    };

    public add(overlay: IGoogleMapsDrawableOverlay)
    {
        this.detectCollection(overlay).push(overlay);
    }

    public remove(overlay: IGoogleMapsDrawableOverlay)
    {
        const collection = this.detectCollection(overlay);
        const index      = collection.indexOf(overlay);

        if (index > -1)
            collection.splice(index, 1);
    }

    private detectCollection(overlay: IGoogleMapsDrawableOverlay): IGoogleMapsDrawableOverlay[]
    {
        const collection = this.map[overlay.type];

        if (collection) return collection;

        throw new Error('Overlay type not supported by OverlayTracker.');
    }
}