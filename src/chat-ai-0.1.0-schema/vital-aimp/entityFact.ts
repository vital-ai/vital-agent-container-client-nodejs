import { GraphObjectFact } from './graphObjectFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EntityFact
 */
export class EntityFact extends GraphObjectFact {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EntityFact';
  }

  /**
   * Get property definitions for EntityFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
