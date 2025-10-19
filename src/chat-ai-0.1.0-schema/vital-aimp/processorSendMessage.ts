import { ProcessorResponseMessage } from './processorResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorSendMessage
 */
export class ProcessorSendMessage extends ProcessorResponseMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorSendMessage';
  }

  /**
   * Get property definitions for ProcessorSendMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
