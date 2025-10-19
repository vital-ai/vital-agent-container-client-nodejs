import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookPost
 */
export class FacebookPost extends Document {
  public thumbnailImageFileNodeURI?: string;
  public commentsCount?: number;
  public thumbnailImageURL?: string;
  public likesCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookPost';
  }

  /**
   * Get property definitions for FacebookPost
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI',
        tsPropertyName: 'thumbnailImageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCommentsCount',
        tsPropertyName: 'commentsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL',
        tsPropertyName: 'thumbnailImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLikesCount',
        tsPropertyName: 'likesCount',
        type: 'number',
        required: false
      }
    ];
  }


}
