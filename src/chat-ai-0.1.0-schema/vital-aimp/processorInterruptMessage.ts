import { ProcessorRequestMessage } from './processorRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorInterruptMessage
 */
export class ProcessorInterruptMessage extends ProcessorRequestMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorInterruptMessage';
  }

  /**
   * Get property definitions for ProcessorInterruptMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
