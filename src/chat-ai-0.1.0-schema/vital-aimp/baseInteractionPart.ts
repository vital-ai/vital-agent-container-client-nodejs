import { VITAL_HyperNode } from '../vital-core/vitalHypernode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BaseInteractionPart
 */
export class BaseInteractionPart extends VITAL_HyperNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BaseInteractionPart';
  }

  /**
   * Get property definitions for BaseInteractionPart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
