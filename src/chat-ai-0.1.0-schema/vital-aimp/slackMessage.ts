import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SlackMessage
 */
export class SlackMessage extends AIMPMessage {
  public slackUserID?: string;
  public slackChannelID?: string;
  public slackThreadID?: string;
  public slackTeamID?: string;
  public slackEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SlackMessage';
  }

  /**
   * Get property definitions for SlackMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackUserID',
        tsPropertyName: 'slackUserID',
        type: 'string',
        required: false
      },
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
