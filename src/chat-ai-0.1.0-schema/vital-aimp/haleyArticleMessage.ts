import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyArticleMessage
 */
export class HaleyArticleMessage extends HaleyMessage {
  public url?: string;
  public shortDescription?: string;
  public publicationDate?: string | Date;
  public longDescription?: string;
  public title?: string;
  public imageURL?: string;
  public thumbnailImageURL?: string;
  public searchString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyArticleMessage';
  }

  /**
   * Get property definitions for HaleyArticleMessage
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongDescription',
        tsPropertyName: 'longDescription',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
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
      }
    ];
  }


}
