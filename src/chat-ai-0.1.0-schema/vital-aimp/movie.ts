import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Movie
 */
export class Movie extends Card {
  public pg?: string;
  public shortDescription?: string;
  public genre?: string;
  public imageFileNodeURI?: string;
  public imdbRating?: number;
  public longDescription?: string;
  public year?: number;
  public durationSeconds?: number;
  public title?: string;
  public imageURL?: string;
  public thumbnailImageFileNodeURI?: string;
  public thumbnailImageURL?: string;
  public rottenTomatoesRating?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Movie';
  }

  /**
   * Get property definitions for Movie
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPg',
        tsPropertyName: 'pg',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGenre',
        tsPropertyName: 'genre',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImdbRating',
        tsPropertyName: 'imdbRating',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongDescription',
        tsPropertyName: 'longDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasYear',
        tsPropertyName: 'year',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDurationSeconds',
        tsPropertyName: 'durationSeconds',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTitle',
        tsPropertyName: 'title',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI',
        tsPropertyName: 'thumbnailImageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL',
        tsPropertyName: 'thumbnailImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRottenTomatoesRating',
        tsPropertyName: 'rottenTomatoesRating',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
