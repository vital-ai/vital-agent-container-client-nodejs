import { VITAL_HyperNode } from '../vital-core/vitalHypernode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VITAL_Annotation
 */
export class VITAL_Annotation extends VITAL_HyperNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VITAL_Annotation';
  }

  /**
   * Get property definitions for VITAL_Annotation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
