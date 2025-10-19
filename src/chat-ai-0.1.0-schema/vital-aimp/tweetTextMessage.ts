import { UserTextMessage } from './userTextMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TweetTextMessage
 */
export class TweetTextMessage extends UserTextMessage {
  public sender?: string;
  public tweetID?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TweetTextMessage';
  }

  /**
   * Get property definitions for TweetTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetID',
        tsPropertyName: 'tweetID',
        type: 'number',
        required: false
      }
    ];
  }


}
