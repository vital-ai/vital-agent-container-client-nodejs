import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyDomainMethod
 */
export class HaleyDomainMethod extends VITAL_Node {
  public domainMethodContextType?: string;
  public implementingGroovyClass?: string;
  public domainMethodGroupURIs?: string[];
  public domainMethodGroupURI?: string;
  public implementingGroovyMethod?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyDomainMethod';
  }

  /**
   * Get property definitions for HaleyDomainMethod
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDomainMethodContextType',
        tsPropertyName: 'domainMethodContextType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasImplementingGroovyClass',
        tsPropertyName: 'implementingGroovyClass',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURIs',
        tsPropertyName: 'domainMethodGroupURIs',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURI',
        tsPropertyName: 'domainMethodGroupURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasImplementingGroovyMethod',
        tsPropertyName: 'implementingGroovyMethod',
        type: 'string',
        required: false
      }
    ];
  }


}
