import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorMessage
 */
export class ProcessorMessage extends AIMPMessage {
  public processorType?: string;
  public processorID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorMessage';
  }

  /**
   * Get property definitions for ProcessorMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorType',
        tsPropertyName: 'processorType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorID',
        tsPropertyName: 'processorID',
        type: 'string',
        required: false
      }
    ];
  }


}
