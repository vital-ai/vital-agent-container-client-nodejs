import { ProcessorMessage } from './processorMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorRequestMessage
 */
export class ProcessorRequestMessage extends ProcessorMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorRequestMessage';
  }

  /**
   * Get property definitions for ProcessorRequestMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
