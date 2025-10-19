import { TwitterMessage } from './twitterMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TweetReceived
 */
export class TweetReceived extends TwitterMessage {
  public campaignURIs?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TweetReceived';
  }

  /**
   * Get property definitions for TweetReceived
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCampaignURIs',
        tsPropertyName: 'campaignURIs',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
