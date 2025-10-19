import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintComparator
 */
export class HaleyAnswerConstraintComparator extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintComparator';
  }

  /**
   * Get property definitions for HaleyAnswerConstraintComparator
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
