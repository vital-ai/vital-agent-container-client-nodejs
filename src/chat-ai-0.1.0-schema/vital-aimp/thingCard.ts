import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ThingCard
 */
export class ThingCard extends Card {
  public url?: string;
  public detailsEnabled?: boolean;
  public shortDescription?: string;
  public swLatitude?: number;
  public formattedContent?: string;
  public payload?: string;
  public neLongitude?: number;
  public neLatitude?: number;
  public autosaveOnChange?: boolean;
  public publicationDate?: string | Date;
  public imageCaption?: string;
  public title?: string;
  public thumbnailImageURL?: string;
  public searchString?: string;
  public cardHeader?: string;
  public directionsStartAddress?: string;
  public directionsEndAddress?: string;
  public imageFileNodeURI?: string;
  public latitude?: number;
  public zoomLevel?: number;
  public editing?: boolean;
  public imageURL?: string;
  public address?: string;
  public directionsJSONResponse?: string;
  public longitude?: number;
  public thumbnailImageFileNodeURI?: string;
  public swLongitude?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ThingCard';
  }

  /**
   * Get property definitions for ThingCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDetailsEnabled',
        tsPropertyName: 'detailsEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLatitude',
        tsPropertyName: 'swLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFormattedContent',
        tsPropertyName: 'formattedContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayload',
        tsPropertyName: 'payload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLongitude',
        tsPropertyName: 'neLongitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLatitude',
        tsPropertyName: 'neLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutosaveOnChange',
        tsPropertyName: 'autosaveOnChange',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPublicationDate',
        tsPropertyName: 'publicationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageCaption',
        tsPropertyName: 'imageCaption',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTitle',
        tsPropertyName: 'title',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL',
        tsPropertyName: 'thumbnailImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSearchString',
        tsPropertyName: 'searchString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardHeader',
        tsPropertyName: 'cardHeader',
        type: 'string',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI',
        tsPropertyName: 'imageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLatitude',
        tsPropertyName: 'latitude',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isEditing',
        tsPropertyName: 'editing',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongitude',
        tsPropertyName: 'longitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI',
        tsPropertyName: 'thumbnailImageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLongitude',
        tsPropertyName: 'swLongitude',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
