import { KGQueryGroup } from './kgqueryGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQueryORGroup
 */
export class KGQueryORGroup extends KGQueryGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQueryORGroup';
  }

  /**
   * Get property definitions for KGQueryORGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
