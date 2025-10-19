import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionMessage
 */
export class QuestionMessage extends AIMPMessage {
  public slackRecipientThreadID?: string;
  public slackRecipientUserID?: string;
  public slackResponse?: boolean;
  public questionPreviousContent?: string;
  public index?: number;
  public slackRecipientTeamID?: string;
  public parentQuestionURI?: string;
  public slackRecipientChannelID?: string;
  public previousAnswer?: string;
  public questionContent?: string;
  public questionOption?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#QuestionMessage';
  }

  /**
   * Get property definitions for QuestionMessage
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID',
        tsPropertyName: 'slackRecipientUserID',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionPreviousContent',
        tsPropertyName: 'questionPreviousContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID',
        tsPropertyName: 'slackRecipientTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentQuestionURI',
        tsPropertyName: 'parentQuestionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID',
        tsPropertyName: 'slackRecipientChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousAnswer',
        tsPropertyName: 'previousAnswer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionContent',
        tsPropertyName: 'questionContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionOption',
        tsPropertyName: 'questionOption',
        type: 'string',
        required: false
      }
    ];
  }


}
