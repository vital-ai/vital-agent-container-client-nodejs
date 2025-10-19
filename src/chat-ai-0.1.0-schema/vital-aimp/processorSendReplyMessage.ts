import { ProcessorRequestMessage } from './processorRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorSendReplyMessage
 */
export class ProcessorSendReplyMessage extends ProcessorRequestMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorSendReplyMessage';
  }

  /**
   * Get property definitions for ProcessorSendReplyMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
