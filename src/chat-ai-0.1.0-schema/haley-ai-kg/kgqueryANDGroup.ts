import { KGQueryGroup } from './kgqueryGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQueryANDGroup
 */
export class KGQueryANDGroup extends KGQueryGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQueryANDGroup';
  }

  /**
   * Get property definitions for KGQueryANDGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
