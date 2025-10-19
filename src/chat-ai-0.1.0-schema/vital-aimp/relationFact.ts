import { ListFact } from './listFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationFact
 */
export class RelationFact extends ListFact {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RelationFact';
  }

  /**
   * Get property definitions for RelationFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
