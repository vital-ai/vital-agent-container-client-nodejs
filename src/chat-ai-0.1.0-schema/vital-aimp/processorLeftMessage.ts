import { ProcessorMessage } from './processorMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorLeftMessage
 */
export class ProcessorLeftMessage extends ProcessorMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorLeftMessage';
  }

  /**
   * Get property definitions for ProcessorLeftMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
