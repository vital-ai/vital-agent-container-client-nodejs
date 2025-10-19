import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyMessage
 */
export class HaleyMessage extends AIMPMessage {
  public slackRecipientThreadID?: string;
  public inReplyToScreenName?: string;
  public slackRecipientUserID?: string;
  public inReplyToTweetID?: number;
  public slackResponse?: boolean;
  public slackRecipientTeamID?: string;
  public smsResponse?: boolean;
  declare public recipient?: string;
  public slackRecipientChannelID?: string;
  public directMessageResponse?: boolean;
  public generateExemplar?: boolean;
  public tweetResponse?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyMessage';
  }

  /**
   * Get property definitions for HaleyMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientThreadID',
        tsPropertyName: 'slackRecipientThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToScreenName',
        tsPropertyName: 'inReplyToScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID',
        tsPropertyName: 'slackRecipientUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToTweetID',
        tsPropertyName: 'inReplyToTweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSlackResponse',
        tsPropertyName: 'slackResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID',
        tsPropertyName: 'slackRecipientTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSmsResponse',
        tsPropertyName: 'smsResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID',
        tsPropertyName: 'slackRecipientChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDirectMessageResponse',
        tsPropertyName: 'directMessageResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isGenerateExemplar',
        tsPropertyName: 'generateExemplar',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTweetResponse',
        tsPropertyName: 'tweetResponse',
        type: 'boolean',
        required: false
      }
    ];
  }


}
