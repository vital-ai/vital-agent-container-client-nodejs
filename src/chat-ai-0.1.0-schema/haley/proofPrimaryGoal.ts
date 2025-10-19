import { ProofGoal } from './proofGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofPrimaryGoal
 */
export class ProofPrimaryGoal extends ProofGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofPrimaryGoal';
  }

  /**
   * Get property definitions for ProofPrimaryGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
