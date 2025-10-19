import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ErrorNode
 */
export class ErrorNode extends VITAL_Node {
  public text?: string;
  public messageSerialized?: string;
  public accountURI?: string;
  public stackTrace?: string;
  public queueName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ErrorNode';
  }

  /**
   * Get property definitions for ErrorNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageSerialized',
        tsPropertyName: 'messageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStackTrace',
        tsPropertyName: 'stackTrace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQueueName',
        tsPropertyName: 'queueName',
        type: 'string',
        required: false
      }
    ];
  }


}
