import { HaleyRealtimeMessage } from './haleyRealtimeMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerRealtimeUpdateMessage
 */
export class AnswerRealtimeUpdateMessage extends HaleyRealtimeMessage {
  public questionURI?: string;
  public propertyValue?: string;
  public propertyName?: string;
  public updateContent?: string;
  public updateType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AnswerRealtimeUpdateMessage';
  }

  /**
   * Get property definitions for AnswerRealtimeUpdateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionURI',
        tsPropertyName: 'questionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
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
      }
    ];
  }


}
