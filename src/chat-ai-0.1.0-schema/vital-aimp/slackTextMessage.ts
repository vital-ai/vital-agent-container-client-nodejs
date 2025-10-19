import { UserTextMessage } from './userTextMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SlackTextMessage
 */
export class SlackTextMessage extends UserTextMessage {
  public slackChannelID?: string;
  public slackThreadID?: string;
  public slackMessageJSON?: string;
  public slackUserID?: string;
  public slackFileShareName?: string;
  public slackFileShareURL?: string;
  public slackTeamID?: string;
  public slackEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SlackTextMessage';
  }

  /**
   * Get property definitions for SlackTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackChannelID',
        tsPropertyName: 'slackChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackThreadID',
        tsPropertyName: 'slackThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackMessageJSON',
        tsPropertyName: 'slackMessageJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackUserID',
        tsPropertyName: 'slackUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackFileShareName',
        tsPropertyName: 'slackFileShareName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackFileShareURL',
        tsPropertyName: 'slackFileShareURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackTeamID',
        tsPropertyName: 'slackTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackEventType',
        tsPropertyName: 'slackEventType',
        type: 'string',
        required: false
      }
    ];
  }


}
