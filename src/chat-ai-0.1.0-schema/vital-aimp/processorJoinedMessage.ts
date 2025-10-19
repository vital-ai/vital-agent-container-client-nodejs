import { ProcessorMessage } from './processorMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorJoinedMessage
 */
export class ProcessorJoinedMessage extends ProcessorMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorJoinedMessage';
  }

  /**
   * Get property definitions for ProcessorJoinedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
