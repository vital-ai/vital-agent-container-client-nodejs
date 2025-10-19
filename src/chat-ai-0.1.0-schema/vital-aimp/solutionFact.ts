import { ListFact } from './listFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SolutionFact
 */
export class SolutionFact extends ListFact {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SolutionFact';
  }

  /**
   * Get property definitions for SolutionFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
