import { ProcessorMessage } from './processorMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorAreYouAliveMessage
 */
export class ProcessorAreYouAliveMessage extends ProcessorMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorAreYouAliveMessage';
  }

  /**
   * Get property definitions for ProcessorAreYouAliveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
