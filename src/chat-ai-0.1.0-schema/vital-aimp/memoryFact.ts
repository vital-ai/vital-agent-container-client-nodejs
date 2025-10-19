import { StringPropertyFact } from './stringPropertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MemoryFact
 */
export class MemoryFact extends StringPropertyFact {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MemoryFact';
  }

  /**
   * Get property definitions for MemoryFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
