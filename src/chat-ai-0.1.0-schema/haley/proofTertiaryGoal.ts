import { ProofGoal } from './proofGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTertiaryGoal
 */
export class ProofTertiaryGoal extends ProofGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTertiaryGoal';
  }

  /**
   * Get property definitions for ProofTertiaryGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
