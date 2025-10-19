import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MapObject
 */
export class MapObject extends Card {
  public swLatitude?: number;
  public directionsStartAddress?: string;
  public directionsEndAddress?: string;
  public directionsJSONResponse?: string;
  public neLatitude?: number;
  public neLongitude?: number;
  public zoomLevel?: number;
  public latitude?: number;
  public address?: string;
  public longitude?: number;
  public swLongitude?: number;
  public searchString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MapObject';
  }

  /**
   * Get property definitions for MapObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLatitude',
        tsPropertyName: 'swLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress',
        tsPropertyName: 'directionsStartAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress',
        tsPropertyName: 'directionsEndAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse',
        tsPropertyName: 'directionsJSONResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLatitude',
        tsPropertyName: 'neLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLongitude',
        tsPropertyName: 'neLongitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasZoomLevel',
        tsPropertyName: 'zoomLevel',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLatitude',
        tsPropertyName: 'latitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongitude',
        tsPropertyName: 'longitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLongitude',
        tsPropertyName: 'swLongitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSearchString',
        tsPropertyName: 'searchString',
        type: 'string',
        required: false
      }
    ];
  }


}
