import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerStatusMessage
 */
export class AnswerStatusMessage extends AIMPMessage {
  public propertyValue?: string;
  public propertyName?: string;
  public status?: string;
  public updateContent?: string;
  public updateType?: string;
  public questionURI?: string;
  public statusMessage?: string;
  public updateAnswer?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AnswerStatusMessage';
  }

  /**
   * Get property definitions for AnswerStatusMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUpdateContent',
        tsPropertyName: 'updateContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUpdateType',
        tsPropertyName: 'updateType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionURI',
        tsPropertyName: 'questionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusMessage',
        tsPropertyName: 'statusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isUpdateAnswer',
        tsPropertyName: 'updateAnswer',
        type: 'boolean',
        required: false
      }
    ];
  }


}
