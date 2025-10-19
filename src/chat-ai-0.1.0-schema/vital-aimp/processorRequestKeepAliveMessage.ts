import { ProcessorResponseMessage } from './processorResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorRequestKeepAliveMessage
 */
export class ProcessorRequestKeepAliveMessage extends ProcessorResponseMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorRequestKeepAliveMessage';
  }

  /**
   * Get property definitions for ProcessorRequestKeepAliveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
