import { HaleyMindAction } from './haleyMindAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindCommandAction
 */
export class HaleyMindCommandAction extends HaleyMindAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindCommandAction';
  }

  /**
   * Get property definitions for HaleyMindCommandAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
