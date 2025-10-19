import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGStatement
 */
export class KGStatement extends KGNode {
  public statementText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGStatement';
  }

  /**
   * Get property definitions for KGStatement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasStatementText',
        tsPropertyName: 'statementText',
        type: 'string',
        required: false
      }
    ];
  }


}
