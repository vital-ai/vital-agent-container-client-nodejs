import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#YouTubeComment
 */
export class YouTubeComment extends Document {
  public videoID?: string;
  public authorName?: string;
  public commentID?: string;
  public socialLikeCount?: number;
  public channelID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#YouTubeComment';
  }

  /**
   * Get property definitions for YouTubeComment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasVideoID',
        tsPropertyName: 'videoID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCommentID',
        tsPropertyName: 'commentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLikeCount',
        tsPropertyName: 'socialLikeCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasChannelID',
        tsPropertyName: 'channelID',
        type: 'string',
        required: false
      }
    ];
  }


}
