import { ProcessorMessage } from './processorMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPEmailMessage
 */
export class AIMPEmailMessage extends ProcessorMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPEmailMessage';
  }

  /**
   * Get property definitions for AIMPEmailMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
