import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerMessage
 */
export class AnswerMessage extends AIMPMessage {
  public slackChannelID?: string;
  public slackResponse?: boolean;
  public slackThreadID?: string;
  public questionClosed?: boolean;
  public goBackSelected?: boolean;
  public slackUserID?: string;
  public helpRequested?: boolean;
  public answerSkipped?: boolean;
  public slackTeamID?: string;
  public slackEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AnswerMessage';
  }

  /**
   * Get property definitions for AnswerMessage
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSlackResponse',
        tsPropertyName: 'slackResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackThreadID',
        tsPropertyName: 'slackThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionClosed',
        tsPropertyName: 'questionClosed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoBackSelected',
        tsPropertyName: 'goBackSelected',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackUserID',
        tsPropertyName: 'slackUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHelpRequested',
        tsPropertyName: 'helpRequested',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAnswerSkipped',
        tsPropertyName: 'answerSkipped',
        type: 'boolean',
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
