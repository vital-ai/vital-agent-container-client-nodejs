import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudDeploymentMessage
 */
export class CloudDeploymentMessage extends HaleyCloud {
  public deploymentMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudDeploymentMessage';
  }

  /**
   * Get property definitions for CloudDeploymentMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDeploymentMessage',
        tsPropertyName: 'deploymentMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
